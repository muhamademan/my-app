import React, { useState } from "react";
import './style.css'
import Header from "./header/header";

const Pelatihan = () => {
  const [nomorResi, setNomotResi] = useState(
    ['0908304923', '23042402834', '03248234923', '0302949823048']
  )
  const [inputResi, setInputResi] = useState('')
  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleEdit = (event) => {
    let index = parseInt(event.target.value)
    let btnEdit = nomorResi[index]
    setInputResi(btnEdit)
    setCurrentIndex(event.target.value)
  }

  const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    let btnDelete = nomorResi[index]
    let newData = nomorResi.filter((e) => {
      return e !== btnDelete
    })
    setNomotResi(newData)
  }

  const handleChange = (event) => {
    setInputResi(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newData = nomorResi

    if (currentIndex === -1) {
      newData = [...nomorResi, inputResi]
    } else {
      newData[currentIndex] = inputResi
    }
    setNomotResi(newData)
    setInputResi('')
  }

  return (
    <>
      <body>
        <Header />
        <table className="peserta-lomba">
          <thead>
            <tr>
              <th>No</th>
              <th>Nomor Resi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              nomorResi.map((value, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td className="aksi">
                      <button onClick={handleEdit} value={index}>Edit</button>&nbsp;
                      <button onClick={handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="card">
          <h2>Form Inputan</h2>
          <form onSubmit={handleSubmit}>
            <label>Masukan Nomor AWb : </label>&nbsp;
            <input type='text' value={inputResi} onChange={handleChange}></input>&nbsp;
            <button>Submit</button>
          </form>
        </div>
      </body>
    </>
  )
}

export default Pelatihan