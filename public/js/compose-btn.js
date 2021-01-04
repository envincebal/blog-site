const title = document.querySelector("#postTitle");
const body = document.querySelector("#postBody");
const editTitle = document.querySelector("#editTitle");
const editBody = document.querySelector("#editBody");
const publish = document.querySelector(".btn-primary");

const composeHandler = () => {
  if (title.value === "" || body.value === "") {
    publish.disabled = true;
  } else {
    publish.disabled = false;
  }

}

const editHandler = () => {
  if (editTitle.value === "" || editBody.value === "") {
    publish.disabled = true;
  } else {
    publish.disabled = false;
  }
}