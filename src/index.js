
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import Student from './components/Student'
import Teacher from './components/Teacher'
import './index.css'
import './main.scss'


get()
function get() {

    axios.get('http://localhost:5050/product').then(res => {
        const plist = document.querySelector('.p_list')
        let list = ''
        res.data.map(data => {

            const { name, price, sale_price, photo } = data
            list += `
        
        <div class="col-md-3 pb-4 ">
            <div class="card shadow">
                <img style = " height: 350px; object-fit: cover" class="card-img" id="photo" src="${photo}" alt="">
                <div class="card-body">
                    <h3>${name}</h3>
                    <p>price: ${price}</p>
                    <p>sale_price: ${sale_price}</p>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
                
        `
        })
        
        plist.innerHTML = list
    })
}

//https://github.com/Masudur-Rahman-01/web-babel-env