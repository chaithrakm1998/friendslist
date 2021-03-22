import React from 'react';

import Friends from '../friendsdetails/friendsdetails'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Mr Janique Costa',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/42.jpg',
          id: 1,
          linkUrl: 'name1'
        },
        {
          title: 'Mr Khaled Borresen',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/25.jpg',
          id: 2,
          linkUrl: 'name2'
        },
        {
          title: 'Miss Maja Kristensen',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/12.jpg',
          id: 3,
          linkUrl: 'name3'
        },
        {
          title: 'Mrs Latife Cevik',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
          id: 4,
          linkUrl: 'name4'
        },
        {
          title: 'Mrs Sayenne Leendertse',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
          id: 5,
          linkUrl: 'name5'
        },
        {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name6'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name7'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name8'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name9'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name10'
          }
      ]
    };
  }

  render() {
    return (
      <div className='directory-friends'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Friends key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
