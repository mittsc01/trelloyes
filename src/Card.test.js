import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card'

describe('Card Component',()=>{

    it('renders without crashing',() =>{
        const div = document.createElement('div');
        ReactDOM.render(<Card />,div);
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected',()=>{
        const tree = renderer
        .create(<Card title="tenth card" content="lorem ipsum" />)
        .toJSON();
    expect(tree).toMatchSnapshot()
    })
    
    //it('renders the UI as expected')
})