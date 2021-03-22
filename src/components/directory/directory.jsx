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
          linkUrl: 'name'
        },
        {
          title: 'Mr Khaled Borresen',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/25.jpg',
          id: 2,
          linkUrl: 'name'
        },
        {
          title: 'Miss Maja Kristensen',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/12.jpg',
          id: 3,
          linkUrl: 'name'
        },
        {
          title: 'Mrs Latife Cevik',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
          id: 4,
          linkUrl: 'name'
        },
        {
          title: 'Mrs Sayenne Leendertse',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
          id: 5,
          linkUrl: 'name'
        },
        {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 6,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 7,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 8,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 9,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 10,
            linkUrl: 'name'
          },
          {
            title: 'Mr Janique Costa',
            imageUrl: 'https://randomuser.me/api/portraits/med/men/42.jpg',
            id: 1,
            linkUrl: 'name'
          },
          {
            title: 'Mr Khaled Borresen',
            imageUrl: 'https://randomuser.me/api/portraits/med/men/25.jpg',
            id: 2,
            linkUrl: 'name'
          },
          {
            title: 'Miss Maja Kristensen',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/12.jpg',
            id: 3,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Latife Cevik',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
            id: 4,
            linkUrl: 'name'
          },
          {
            title: 'Mrs Sayenne Leendertse',
            imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
            id: 5,
            linkUrl: 'name'
          },
          {
              title: 'Mrs Sayenne Leendertse',
              imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
              id: 6,
              linkUrl: 'name'
            },
            {
              title: 'Mrs Sayenne Leendertse',
              imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
              id: 7,
              linkUrl: 'name'
            },
            {
              title: 'Mrs Sayenne Leendertse',
              imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
              id: 8,
              linkUrl: 'name'
            },
            {
              title: 'Mrs Sayenne Leendertse',
              imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
              id: 9,
              linkUrl: 'name'
            },
            {
              title: 'Mrs Sayenne Leendertse',
              imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
              id: 10,
              linkUrl: 'name'
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
