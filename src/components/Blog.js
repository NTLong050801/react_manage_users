import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import wp1 from '../assets/images/wp1.jpg';
import wp2 from '../assets/images/wp2.jpg';
import wp3 from '../assets/images/wp3.jpg';
import wp4 from '../assets/images/wp4.jpg';
import wp6 from '../assets/images/wp6.jpg';
import wp7 from '../assets/images/wp7.jpg';
import wp8 from '../assets/images/wp8.jpg';
import wp9 from '../assets/images/wp9.jpg';
import wp10 from '../assets/images/wp10.jpg';
import wp11 from '../assets/images/wp11.jpg';
import { toast } from 'react-toastify';
function Blog(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('George Bluth')
  const [content, setContent] = useState('')
  const [img, setImg] = useState(wp1)
  const [handImg, setHandImg] = useState('random')
  const blogs = useSelector(state => state.blogs);
  const listUsers = useSelector(state => state.listUsers);
  const arrImgRandom = [wp1, wp2, wp3, wp4, wp6, wp7, wp8, wp9, wp10, wp11]
  const changeTitle = (e) => {
    setTitle(e.target.value)

  }
  const changeAuthor = (e) => {
    setAuthor(e.target.value)


  }
  const changeContent = (e) => {
    setContent(e.target.value)

  }
  const handlerImage = (e) => {
    
    setHandImg(e.target.value)
    setImg(arrImgRandom[Math.floor(Math.random() * arrImgRandom.length)])
  }
  const handleImageChange = (e) => {
    let name_file = e.target.files[0];
    let ext = name_file.name.split('.').pop()
    if (ext === 'jpg' || ext === 'png') {
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    else {
      alert("Vui lòng chọn file jpg hoặc png")
    }
  }
  // useEffect(() => {
  //   setImg(arrImgRandom[Math.floor(Math.random() * arrImgRandom.length)])
  // });
  const createBlog = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 1000);
    if (handImg === "random") {
      setImg(arrImgRandom[Math.floor(Math.random() * arrImgRandom.length)])
    } 
    let blog = {
      id: id,
      title: title,
      author: author,
      content: content,
      img: img
    }
   //console.log(blog)
     dispatch({ type: 'CREATE_BLOG', blog });
     setTitle('');
     setAuthor('');
     setContent('')
     toast.success('Tạo blog thành công')
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // console.log( blogs.reverse());

  });

  return (
    <>
      <h2 className='text-center my-5 text-success'>Make Blog</h2>
      <form className='container my-5' onSubmit={(e) => createBlog(e)}>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Title</label>
            <input value={title} onChange={(e) => changeTitle(e)} required type="text" class="form-control" id="inputEmail4" placeholder="Title" />
          </div>
          <div class="form-group col-md-6 ">
            <label for="inputPassword4">Author</label>
            <select value={author} onChange={(e) => changeAuthor(e)} class="custom-select form-control" required>
              {
                listUsers.map((item) => {
                  return (
                    <option value={item.first_name + " " + item.last_name}  >{item.first_name + " " + item.last_name}</option>
                  )
                })
              }

            </select>
          </div>
        </div>
        <div class="form-group my-3">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea value={content} onChange={(e) => changeContent(e)} required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className='form-group my-3'>
          <div class="form-check form-check-inline">
            <input checked={handImg === 'random'} onChange={(e) => handlerImage(e)} value="random" class="form-check-input border border-danger" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
            <label class="form-check-label" for="inlineRadio1">Random Image</label>
          </div>
          <div class="form-check form-check-inline">
            <input checked={handImg === 'pick'} onChange={(e) => handlerImage(e)} value="pick" class="form-check-input border border-danger" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
            <label class="form-check-label" for="inlineRadio2">Pick Image </label>
          </div>
        </div>
        {
          handImg === 'pick' &&
          <div class="form-group my-3">
            <label for="exampleFormControlFile1">Pick Image :</label>
            <input onChange={(e) => handleImageChange(e)}  type="file" class="form-control-file ms-5" id="exampleFormControlFile1" />
          </div>
        }

        <button type="submit" class="btn btn-primary my-5">Create</button>
      </form>

      <div className='container my-5 text-center'>

        <div className='row'>
          {
            blogs.reverse().map((item, index) => {
              return (
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src={item.img} style={{ width: "auto" , height : "270px" }} alt='this is img' class="img-fluid" />
                      <a href="#!">
                        <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">
                        {item.content}
                      </p>
                      <span href="#!" style={{ float: "left" }} class="btn  text-right">Author : <a href='/#' className='btn btn-secondary text-info'>{item.author}</a></span>

                      <a href="#!" style={{ float: "right" }} class="btn btn-primary text-right">Read</a>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
    </>
  );
}
export default Blog;
