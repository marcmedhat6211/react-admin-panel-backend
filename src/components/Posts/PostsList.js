import React from "react";
import { useState, useEffect } from "react";
import PSignInForm from "./post-auth/PSignInForm";
import PostsForm from "./post-auth/PostsForm";
import Posts from "./Posts";
import { sendRequest } from "../../services/ApiService";

function PostsList() {
  let nums = [1, 2, 3, 4];
  // for of loop (bat3et el array bs)
  for (let x of nums) {
    // console.log(x);
  }

  let person = {
    name: "Michael",
    age: 35,
  };

  // for in loop (for objects only)
  for (let key in person) {
    // console.log(key);
    // console.log(person[key]);
  }

  // const arrived = true;
  // const ride = new Promise((resolve, reject) => {
  //   if (arrived) {
  //     resolve("your ride has arrived");
  //   } else {
  //     reject("your captain cancelled the ride");
  //   }
  // });

  // ride
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // const dealWithRide = async () => {
  //   let res = await ride;
  //   return res;
  // };

  const [signedIn, setSignedIn] = useState(true);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setSignedIn(true);
    localStorage.setItem("loggedIn", "1");
  };
  // leh yaodkhol f infinite loop? law 3amalt el if condition men gher useEffect
  // ay state btetghayar react(set new state) bet rerender elcomponent
  // fa ana law 3amalt refresh hatet3amal new state w hayrerender again and again
  // laken keda use Effect betla2y el array of dependencies fadi fa betrender only once
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setSignedIn(true);
    }

    sendRequest("dummy-product/list", "GET").then((res) => {
      // console.log(res.data);
      // let mappedData = [];
      // for (let post of res.data) {
      //   mappedData.push({
      //     id: post.id,
      //     title: post.name,
      //     description: post.description,
      //     price: post.price,
      //   });
      // }

      // setPosts(mappedData);

      setPosts(
        res.data.map((post) => {
          return {
            id: post.id,
            title: post.name,
            description: post.description,
            price: post.price,
          };
        })
      );
    });
  }, []);

  const [posts, setPosts] = useState([]);
  const postSubmitHandler = (enteredTitle, enteredDesc, enteredPrice) => {
    sendRequest("dummy-product", "POST", {
      name: enteredTitle,
      description: enteredDesc,
      price: enteredPrice,
    }).then((res) => {
      console.log(res);
      // setPosts((prevstate) => {
      //   return [
      //     ...prevstate,
      //     {
      //       id: res.name,
      //       title: enteredTitle,
      //       description: enteredDesc,
      //       price: enteredPrice,
      //     },
      //   ];
      // });
    });

    // fetch(
    //   "https://admin-panel-514c3-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       title: enteredTitle,
    //       description: enteredDesc,
    //       price: enteredPrice,
    //     }),
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     return false;
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // if (typeof response === "object" && "name" in response) {
    //     // }
    //     if (response !== false) {
    //       // show success message to the user
    //       setPosts((prevstate) => {
    //         return [
    //           ...prevstate,
    //           {
    //             id: response.name,
    //             title: enteredTitle,
    //             description: enteredDesc,
    //             price: enteredPrice,
    //           },
    //         ];
    //       });
    //     } else {
    //       // show the user an error message
    //     }
    //   })
    //   .catch((err) => {
    //     // show the user an error message
    //     console.log(err);
    //   });
  };

  return (
    <div>
      {!signedIn && <PSignInForm onSubmit={formSubmitHandler} />}
      <button
        onClick={() => {
          setSignedIn(false);
          localStorage.removeItem("loggedIn");
        }}
      >
        Sign Out
      </button>
      {signedIn && <PostsForm postSubmitHandler={postSubmitHandler} />}
      <Posts posts={posts} />
    </div>
  );
}
export default PostsList;
