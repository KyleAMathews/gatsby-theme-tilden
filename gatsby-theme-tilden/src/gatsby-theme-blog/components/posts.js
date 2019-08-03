import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "gatsby-theme-blog/src/components/layout";
import SEO from "gatsby-theme-blog/src/components/seo";
import Footer from "gatsby-theme-blog/src/components/home-footer";

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug;
        const keywords = node.keywords || [];
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div css={css({ mb: [3, 4] })}>
              <Styled.h2
                css={css({
                  mb: 0
                })}
              >
                <Styled.a
                  as={Link}
                  css={{
                    textDecoration: `none`
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <div
                css={css({ variant: `text.grayDisplay`, fontSize: 14, mb: 0 })}
              >
                {node.date}
              </div>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        );
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
);

export default Posts;
