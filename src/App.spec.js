import {expect} from 'chai'
import React from 'react'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import App, {SYMBOLS} from './App'

import Card from './Card'

describe('<Card/>', () => {

    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(
            <Card card="😁" feedback="hidden" index={0} onClick={onClick}/>
        );

        wrapper.simulate('click');
        expect(onClick).to.have.been.calledWith(0)
    });

    it('should match its reference snapshot', () => {
        const mock = sinon
            .stub(App.prototype, 'generateCards')
            .returns([...SYMBOLS.repeat(2)]);
        try {
            const wrapper = shallow(<App/>);

            expect(wrapper).to.matchSnapshot()
        } finally {
            mock.restore()
        }
    })
});