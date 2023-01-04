import './App.css';
import users from './users.json';

const patient_detail=users.patient_detail;
const result=users.result;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
const extractedContent = result.reduce((acc, curr)=>{
  acc.push(months[new Date(curr.date).getMonth()]+ new Date(curr.date).getFullYear())
  return acc
}, [])
const countOfDates = extractedContent.reduce((acc, curr)=>{
  let count = extractedContent.filter((item)=>{
			return item === curr
  }).length
  let temp = curr
  if(count > 1){
  	temp += "(" + count + ")"
  }
  acc.push(temp)
  return acc
  }, [])
  const removeDuplicates = countOfDates.reduce((acc, curr)=>{
    if(!acc.includes(curr)){
    acc.push(curr)
  }
  return acc
  }, []) 

function Displayyear() {
  return removeDuplicates.map((year) => <li>{year}</li>);
}

function App(){
  return (
    <div className="App">
      <div class="topborder"><img src={require('./slashdr-icon.jpg')}height={60}width={110}></img></div>
      <div class="header"><h2>Mr.AABITHA D ,  29/M</h2></div>
      <h4 class="up">Profile</h4>
      <u><h4 class="current">Patient Summary</h4></u>
      <h4 class="up">This visit</h4>
      <h4 class="up">Prescription</h4>
      <h4 class="up">Printing Prescription</h4>
      <div class="title"><h2>Patient Details</h2></div>
      <div class="patient">
      {
      patient_detail && patient_detail.map(user => {
        return (
            <h3>{user.content}</h3>
        );
      })}
      </div>
      <div class="timeline">
          <h4>{Displayyear()}</h4>
      </div>
      <div class="body">
        {result && result.map(user => {
          return (
            <div class="box">
              <h1 class="dr">Visited:{user.doctor}</h1>
              <h2 class="info">{user.date}</h2>
              <br></br>
              {user.summary && user.summary.map(data => {
                return (
                  <div>
                    <h5 class="value">{data.content}</h5>
                  </div>
                );
              })}
              <h2 class="info">{user.prescription != null ? <a href={user.prescription}></a> : null}</h2>
            </div>
          );
        })}
      </div>
      </div>
  );
}
export default App;
