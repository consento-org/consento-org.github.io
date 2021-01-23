/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import SearchBar from '@theme/SearchBar';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize, { windowSizes } from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import styles from './Navbar/styles.module.css'; // retrocompatible with v1

const DefaultNavItemPosition = 'right'; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'left');
  const rightItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'right');
  return {
    leftItems,
    rightItems
  };
}

function on (obj, events, handler ) {
  events = events.split(/ |,/g).filter(Boolean)
  events.forEach(event => obj.addEventListener(event, handler))
  return () => events.forEach(event => obj.removeEventListener(event, handler))
}

function useScrollSwitch (handler) {
  if (typeof window === 'undefined') {
    return handler(0, 0)
  }
  let [state, setState] = useState(handler(window.pageYOffset, window.pageXOffset))
  useEffect(() => {
    function updateState() {
      const newState = handler(window.pageYOffset, window.pageXOffset)
      if (newState !== state) {
        state = newState
        setState(newState)
      }
    }
    const stopWindow = on(window, 'scroll, resize', updateState)
    const stopDocument = on(document, 'scroll, ready', updateState)
    updateState()
    return () => {
      stopWindow()
      stopDocument()
    }
  }, [])
  return state
}

function useScrolledToTop () {
  return useScrollSwitch(scrollToTop)

  function scrollToTop (y) {
    return y < 40
  }
}

function Navbar() {
  const {
    navbar: {
      items
    }
  } = useThemeConfig();
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const sidebarTop = useScrolledToTop();
  useLockBodyScroll(sidebarShown);
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false);
    }
  }, [windowSize]);
  const {
    leftItems,
    rightItems
  } = splitNavItemsByPosition(items);
  return <nav className={clsx('navbar', 'navbar--fixed-top', {
    'navbar-sidebar--show': sidebarShown,
    'navbar-top': sidebarTop
  })}>
      <div className="navbar__inner">
        <div className="navbar__items">
          {items != null && items.length !== 0 && <div aria-label="Navigation bar toggle" className="navbar__toggle" role="button" tabIndex={0} onClick={showSidebar} onKeyDown={showSidebar}>
              <IconMenu />
            </div>}
          <Logo className="navbar__brand" imageClassName="navbar__logo" titleClassName={clsx('navbar__title', {
          [styles.hideLogoText]: isSearchBarExpanded
        })} />
          {leftItems.map((item, i) => <NavbarItem {...item} key={i} />)}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => <NavbarItem {...item} key={i} />)}
          <SearchBar handleSearchBarToggle={setIsSearchBarExpanded} isSearchBarExpanded={isSearchBarExpanded} />
        </div>
      </div>
      <div role="presentation" className="navbar-sidebar__backdrop" onClick={hideSidebar} />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <Logo className="navbar__brand" imageClassName="navbar__logo" titleClassName="navbar__title" onClick={hideSidebar} />
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />)}
            </ul>
          </div>
        </div>
      </div>
    </nav>;
}

export default Navbar;