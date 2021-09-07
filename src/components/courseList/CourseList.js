import React, { Component, Fragment } from "react";

class CourseList extends Component {

    state = {
        isEdit : false
    }

    renderCourse = () => {
        return (
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={() => (this.toggleState())}>Edit</button>
                <button onClick={() => (this.props.onDelete(this.props.index))} type="button">Delete</button>
            </li>
        )
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    renderUpdateCourse = () => {
        return (
            <form onSubmit={this.updateCourseItem}> 
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.course.name}/>
                <button>Update Course</button>
            </form>
        )
    }

    render() {
        let {isEdit} = this.state;

        return (
            <Fragment>
                {isEdit ? this.renderUpdateCourse() : this.renderCourse()}
            </Fragment>
        );
    }
}

export default CourseList;
