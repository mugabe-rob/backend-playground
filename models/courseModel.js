const courses = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'NodeJS' },
  { id: 4, name: 'ExpressJS' },
  { id: 5, name: 'ReactJS' },
  { id: 6, name: 'AngularJS' },
  { id: 7, name: 'VueJS' },
];

class Course {
  static getAll() {
    return courses;
  }

  static findById(id) {
    return courses.find(c => c.id === id);
  }

  static create(courseData) {
    const course = {
      id: courses.length + 1,
      name: courseData.name
    };
    
    courses.push(course);
    return course;
  }

  static update(id, courseData) {
    const course = this.findById(id);
    
    if (!course) return null;
    
    course.name = courseData.name;
    return course;
  }

  static delete(id) {
    const course = this.findById(id);
    
    if (!course) return null;
    
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    return course;
  }
}

module.exports = Course;