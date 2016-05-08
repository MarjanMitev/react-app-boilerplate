/* Root js file for the application */
import React, { Component } from 'react';
import Filter from '../../components/todo/Filter';
import AddTodo from '../todo/AddTodo';
import VisibleTodoList from '../todo/VisibleTodoList';
import Header from '../../components/header';
import Footer from '../../components/footer';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
        <div className="container">
          <div className="row">
            <AddTodo />
            <VisibleTodoList />
            <Filter />
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
