import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';

import Header from './Header';
import Footer from './Footer';
// {_.get(this.props, 'pageContext.frontmatter.ogimage')}

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta property='og:image' content={_.get(this.props, 'pageContext.site.siteMetadata.url') + _.get(this.props, 'pageContext.frontmatter.image') + '?v=02'} />
                    <meta property='og:locale' content='en_US' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - ' + _.get(this.props, 'pageContext.site.siteMetadata.title')} />
                    <meta property='og:description' content={_.get(this.props, 'pageContext.site.siteMetadata.description')} />
                    <meta property='og:url' content={_.get(this.props, 'pageContext.site.siteMetadata.url')} />
                    <meta property='og:updated_time' content='2019-04-31' />
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
