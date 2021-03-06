import React from 'react';
import Days from './Days';
import Displydays from './displayDay';
import DisplayExe from './displalyExe';
// import Exercises from './Exercise';

class App extends React.Component {
  state = {
    day: [],
    exercise: {
      Saturday: [],
      Sunday: [],
      Monday: [],
      Tuseday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
    },
    show: false,
    hide: false,
    showdays: false,
    showdayExe: {
      Saturday: false,
      Sunday: false,
      Monday: false,
      Tuseday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
    },
  };

  onClick = () => {
    //  const { show } = this.state;
    this.setState({ show: true, hide: true });
  };

  closeOnClick = () => {
    //  const { show } = this.state;
    this.setState({ show: false, hide: false });
  };

  onClickDay = () => {
    const { showdays } = this.state;
    this.setState({ showdays: !showdays });
  };

  onClickDayExe = day => {
    const { showdayExe } = this.state;
    this.setState({ showdayExe: { ...showdayExe, [day]: !showdayExe[day] } });
  };

  setDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: [...day, MyDay] });
  };

  removeDay = MyDay => {
    const { day } = this.state;
    this.setState({ day: day.filter(e => e !== MyDay) });
  };

  setExe = (day, Exe) => {
    const { exercise } = this.state;

    this.setState({
      exercise: {
        ...exercise,
        [day]: [...exercise[day], Exe],
      },
    });
  };

  removeExe = (day, Exe) => {
    const { exercise } = this.state;

    this.setState({
      exercise: {
        ...exercise,
        [day]: exercise[day].filter(e => e !== Exe),
      },
    });
  };

  render() {
    const { day, exercise, show, hide, showdays, showdayExe } = this.state;
    // eslint-disable-next-line no-return-assign
    return (
      <main>
       
        <div
          className="display-main"
          style={{ display: hide ? 'none' : 'block' }}
        >
          <Days
            addDay={this.setDay}
            removeDay={this.removeDay}
            dayArr={day}
            // hide={hide}
            onClickDay={this.onClickDay}
            showdays={showdays}
          />
           <input className="show-exe"
          type="button"
          onClick={this.onClick}
          value="Show Your excersise"
        />
          <Displydays
            MyDays={day}
            addExercise={this.setExe}
            removeExe={this.removeExe}
            excersise={exercise}
            hide={hide}
            onClickDay={this.onClickDay}
            showdays={showdays}
            showdayExe={showdayExe}
            onClickDayExe={this.onClickDayExe}
          />
        </div>
        <DisplayExe
          MyDays={day}
          MyExcersise={exercise}
          closeOnClick={this.closeOnClick}
          show={show}
          hide={hide}
        />
      </main>
    );
  }
}

export default App;
