import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../redux/action/actionIndex";
import Toastify from "../components/notification/Toaster";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../components/notification/notificationService";

export {
  React,
  useState,
  useDispatch,
  useSelector,
  addTodo,
  deleteTodo,
  removeTodo,
  Toastify,
  showErrorNotification,
  showSuccessNotification,
};
