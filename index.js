class Student {
  year = 2023;
  attendanceArray = new Array(25);
  currentIndex = 0;

  constructor(name, surname, birthYear, marksArray) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.marksArray = marksArray;
    this.averageMark = this.getAverageMark();
  }

  getAge() {
    return this.year - this.birthYear;
  }

  getAverageMark() {
    return (
      this.marksArray.reduce((sum, cur) => sum + cur, 0) /
      this.marksArray.length
    );
  }

  markAttendance(isPresent) {
    if (this.currentIndex < this.attendanceArray.length) {
      this, (this.attendanceArray[this.currentIndex++] = isPresent);
    } else {
      console.log("Attendance array is full!");
    }
  }

  present() {
    this.markAttendance(true);
  }

  absent() {
    this.markAttendance(false);
  }

  summary() {
    const averageAttendance =
      this.attendanceArray.filter((el) => el === true).length /
      this.attendanceArray.length;
    if (this.getAverageMark() > 90 && averageAttendance > 0.9) {
      console.log("Excellent!");
    } else if (this.getAverageMark() > 90 || averageAttendance > 0.9) {
      console.log("Good, but you can do better!");
    } else {
      console.log("That's really bad attendance!");
    }
  }
}

const dan = new Student("Bohdan", "Dmytrenko", 1996, [100, 60, 82]);
dan.present();
dan.present();
dan.absent();
dan.absent();
dan.absent();
dan.present();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.absent();
dan.getAverageMark();

dan.summary();

console.log(dan);

const vlad = new Student(
  "Vladislav",
  "Shevchenko",
  1996,
  [100, 60, 82, 90, 90, 90, 90, 100, 100, 100, 100, 100, 100, 100]
);
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.present();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();
vlad.absent();

vlad.getAverageMark();

vlad.summary();

console.log(vlad);
