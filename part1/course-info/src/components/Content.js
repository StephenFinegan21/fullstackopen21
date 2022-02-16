import React from 'react'
import Part from './Part'

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
    <>
    <Part data = {part1} exercises = {exercises1}/>
    <Part data = {part2} exercises = {exercises2}/>
    <Part data = {part3} exercises = {exercises3}/>
    </>
  )
}

export default Content