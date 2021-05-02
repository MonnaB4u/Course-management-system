import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseInside from "./Component/Home/CourseInside/CourseInside";
import GradeBook from "./Component/Home/CourseInside/GradeBook/GradeBook";
import SubmitAssignment from "./Component/Home/CourseInside/SubmitAssignment/SubmitAssignment";
import Syllebus from "./Component/Home/CourseInside/Syllebus/Syllebus";
import './App.css'
import Home from './Component/Home/Home';
import Notification from "./Component/Home/Notification/Notification";
import SendSMS from "./Component/SendSMS/SendSMS";
import { createContext, useState } from "react";
import LoginMain from "./Component/LogIn/LoginMain";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import AdminMain from "./Component/Admin/AdminMain/AdminMain";
import UploadSyllabus from "./Component/Admin/UploadSyllabus/UploadSyllabus";



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="headerbanner"></div>
      <Router>
        <Switch>

        <Route exact path='/'> <Home></Home> </Route>
        <Route path='/home'> <Home></Home> </Route>
        <Route path="/insidecourse/:id"> <CourseInside></CourseInside> </Route>
        <Route path='/syllabus'> <Syllebus></Syllebus> </Route>
        <Route path='/GradeBook'> <GradeBook></GradeBook> </Route>
        <Route path='/subAssign'> <SubmitAssignment></SubmitAssignment> </Route>
        <Route path='/contact'> <SendSMS></SendSMS> </Route>
        <Route path='/notification'> <Notification></Notification> </Route>
        <Route path='/login'> <LoginMain></LoginMain> </Route>
        <Route path='/admin'> <AdminMain></AdminMain> </Route>
        
      {/* Admin Route */}

      <Route exact path='/upload-Sullabus'><UploadSyllabus></UploadSyllabus></Route>
      <Route path="upload-assignment"></Route>
      <Route path="/upload-grades"></Route>
      <Route path="/upload-notification"></Route>
      <Route path="/send-message"></Route>

        </Switch>
      </Router>
      
      </UserContext.Provider>
  );
}

export default App;
