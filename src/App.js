import React, { Component } from "react";
import CourseForm from "./components/courseForm/CourseForm";
import CourseList from "./components/courseList/CourseList";

class App extends Component {

  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JQuery'},
    ],

    current : ''
  }

  updateCourse = (e) => {
    this.setState({current: e.target.value});
  }

  addCourse = (e) => {
    e.preventDefault();
    if(e.target.course.value === '') {
      return false;
    }
    else {
      let courses = this.state.courses;
      let current = this.state.current;

      courses.push({name: current});
      this.setState({courses, current: ''});
      } 
  }

  onDelete = (index) => {
    let courses = this.state.courses;

    courses.splice(index, 1);
    this.setState(courses);
  }

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;

    this.setState({
      courses
    })
  }

  render() {
    const {courses} = this.state;
    let length = courses.length;

    const courseList = length ? (
      courses.map((course, index) => {
        return (
          <CourseList  course={course} key={index} index={index} onDelete={this.onDelete} editCourse={this.editCourse} />
        )
      })
    ) : (
      <p>There is no Courses to show</p>
    )

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>
          {courseList}
        </ul>
      </section>
    );
  }
}

export default App;
