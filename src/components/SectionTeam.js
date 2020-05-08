import React from 'react';
import _ from 'lodash';

import { htmlToReact, safePrefix } from '../utils';

export default class SectionTeam extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className={'block team-block bg-' + _.get(section, 'background') + ' outer'}>
                <div className="block-header inner-small">
                {_.get(section, 'title') &&
                    <h2 className="block-title">{_.get(section, 'title')}</h2>
                }
                {_.get(section, 'subtitle') &&
                    <p className="block-subtitle">
                    {htmlToReact(_.get(section, 'subtitle'))}
                    </p>
                }
                </div>
                {_.get(section, 'members') &&
                    <div className="inner">
                        <div className="grid">
                            {_.map(_.get(section, 'members'), (member, member_idx) => (
                                <div key={member_idx} className="cell team">
                                    <div className="team-inside">
                                        {_.get(member, 'avatar') &&
                                            <img className="team-avatar" src={safePrefix(_.get(member, 'avatar'))} alt="Team avatar" />
                                        }
                                        <p className="team-text">{htmlToReact(_.get(member, 'content'))}</p>
                                        <footer className="team-footer">
                                            <cite className="team-author">{_.get(member, 'author')}</cite>
                                        </footer>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </section>
        );
    }
}
