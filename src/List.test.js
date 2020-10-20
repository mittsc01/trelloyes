import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List'

describe('List Component',()=>{

    it('renders without crashing',() =>{
        const div = document.createElement('div');
        ReactDOM.render(<List {...{
            id: '3',
            header: 'Third list',
            key: '3',
            cards: [ 
                { id: 'a', title: 'First card', content: 'lorem ipsum' },
                { id: 'b', title: 'Second card', content: 'lorem ipsum' }, 
                { id: 'h', title: 'Eighth card', content: 'lorem ipsum' } 
            ],
          }} />,div);
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the UI as expected',()=>{
        const tree = renderer
        .create(<List {...{
            id: '3',
            header: 'Third list',
            key: '3',
            cards: [ 
                { id: 'a', title: 'First card', content: 'lorem ipsum' },
                { id: 'b', title: 'Second card', content: 'lorem ipsum' }, 
                { id: 'h', title: 'Eighth card', content: 'lorem ipsum' } 
            ],
          }} />)
        .toJSON();
    expect(tree).toMatchSnapshot()
    })
})