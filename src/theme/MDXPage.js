/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import TOC from '@theme/TOC';
import { Section, License } from './consento';

function MDXPage(props) {
  const {
    content: MDXPageContent
  } = props;
  const {
    frontMatter,
    metadata
  } = MDXPageContent;
  const {
    title,
    description,
    wrapperClassName,
    hide_table_of_contents: hideTableOfContents
  } = frontMatter;
  const {
    permalink
  } = metadata;
  return <Layout title={title} description={description} permalink={permalink} wrapperClassName={wrapperClassName}>
      <main>
        <div className="container container--fluid">
          <div className="margin-vert--lg padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2">
                {
                  frontMatter.image
                    ? <img src={frontMatter.image} />
                    : <></>
                }
                {
                  frontMatter.section
                    ? <Section id={frontMatter.section} />
                    : <></>
                }
                <div className="container">
                  <h1>{title}</h1>
                  <MDXProvider components={MDXComponents}>
                    <MDXPageContent />
                  </MDXProvider>
                  <FrontMatterLicense {...frontMatter} />
                </div>
              </div>
              {!hideTableOfContents && MDXPageContent.toc && <div className="col col--2">
                  <TOC toc={MDXPageContent.toc} />
                </div>}
            </div>
          </div>
        </div>
      </main>
    </Layout>;
}

function FrontMatterLicense ({ license, author, year }) {
  if (!license && !author && !year) {
    return <></>
  }
  return <License license={license} author={author} year={year} />
}

export default MDXPage;
