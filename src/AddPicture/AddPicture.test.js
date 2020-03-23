import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddPicture from './AddPicture'

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<AddPicture />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
