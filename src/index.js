import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// // Code for Defining a Node Object 
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class list {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Code for Inserting a New Node
//   insert(data) {
//     // Create a new node
//     const newNode = new Node(data);

//     // If list is empty
//     if (list.head === null) {
//       list.head = newNode;
//     }
//     else {
//       let currentNode = list.head;
//       while (currentNode.next !== null) {
//         currentNode = currentNode.next;
//       }
//       currentNode.next = newNode;
//     }
//   }

//   // Code for Deleting Existing Node
//   remove(data) {
//     let currentNode = list.head;
//     let prevNode = null;
//     // Check if the head node contains the data to be deleted
//     if (currentNode.value === data) {
//       list.head = currentNode.next;
//     } else {
//       while (currentNode.value !== data) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       prevNode.next = currentNode.next;
//     }
//   }

//   // Code for Traversing the Linked List
//   traverse() {
//     let currentNode = list.head;
//     while (currentNode !== null) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }

//   // Code for Searching in the Linked List
//   search(value) {
//     let currentNode = list.head;
//     while (currentNode.value !== value) {
//       currentNode = currentNode.next;
//     }
//     return currentNode;
//   }

//   // Code for Displaying the Linked List
//   display() {
//     let currentNode = list.head;
//     let i = 0;
//     while (currentNode != null) {
//       console.log("Element at position " + i + " = " + currentNode.value);
//       currentNode = currentNode.next;
//       i++;
//     }
//   }
// }

// // Individual node(Element)

// // class node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   // Adding Elements to the list 
//   add(data) {
//     const nNode = new Node()

//     // Checking if list is empty or not

//     if (list.head === null) {
//       list.head = nNode
//     } else {
//       let currentNode = list.head;
//       // creating room for next node
//       // If next node is not empty, create next node and make it nNode
//       while (currentNode.next !== null) {
//         currentNode = currentNode.next
//       }

//       currentNode = nNode
//     }
//   }

// }

// let today = new Node()
// today.value = "Tunde"

// let nadar = new Node()
// nadar.value = "best"

// today.next = nadar

// console.log(linkedList)