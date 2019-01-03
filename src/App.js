import React, { Component } from "react";
// import "./App.css";

let num = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.onChange = this.onChange.bind(this);
    this.debounce = this.debounce.bind(this);
    this.throttle = this.throttle.bind(this);
  }
  onChange() {
    console.log(num++);
    const inputValue = this.input.value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.cod === "404") {
          alert(data.message);
        } else {
          this.setState({
            data: data
          });
        }
      });
  }
  // 节流函数,通过设置定时器，让高频连续触发的事件每隔一定的时间长度之后再做出响应。是有规律的时间间隔去执行
  throttle(func, waittime) {
    let startTime = Date.now();
    return function() {
      let context = this;
      let args = arguments;
      let curTime = Date.now();
      if (curTime - startTime >= waittime) {
        func.apply(context, args);
        startTime = Date.now();
      }
    };
  }

  // 防抖,就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
  debounce(func, wait) {
    let timer = null; // 记录当前执行函数的状态
    return function() {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            ref={input => {
              this.input = input;
            }}
            onChange={this.throttle(this.onChange, 2000)}
          />
          {/* <button>搜索</button> */}
        </div>
      </div>
    );
  }
}
export default App;
