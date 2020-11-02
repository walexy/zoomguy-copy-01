import React , { useRef, useEffect }from 'react';
import _ from 'lodash';
import * as typeformEmbed from "@typeform/embed";

import {safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

const  SectionEventform = (props) => {
        let section = _.get(props, 'section');
        const typeformRef = useRef(null);
  
  useEffect(() => {
    typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/AHlRqi', {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0,
    });
  }, [typeformRef]);

        return (
            <section id={_.get(section, 'section_id')} className={'block text-block bg-' + _.get(section, 'background')}>
              
              <div ref={typeformRef} style={{ marginTop: '0', height: 'calc(90vh - 30px)', width: '100%'}}></div>

            </section>
        );
};

export default SectionEventform;