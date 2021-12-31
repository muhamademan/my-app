import React, { useState } from "react";
import './style.css'

const Latihan = () => {
  const [namaPeserta, setNamaPeserta] = useState(
    ['Alan Subagja', 'Alan Sugandi', 'Alan Sundayat']
  )
  const [inputNama, setInputNama] = useState('')
  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleSubmit = (event) => {
    event.preventDefault()
    let newData = namaPeserta

    if (currentIndex === -1) {
      newData = [...namaPeserta, inputNama]
    } else {
      newData[currentIndex] = inputNama
    }

    setNamaPeserta(newData)
    setInputNama('')
  }

  const handleChange = (event) => {
    setInputNama(event.target.value)
  }

  const handleEdit = (event) => {
    let index = parseInt(event.target.value)
    let editValue = namaPeserta[index]
    setInputNama(editValue)
    setCurrentIndex(event.target.value)
  }

  const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    let deletedItem = namaPeserta[index]
    let newData = namaPeserta.filter((e) => {
      return e !== deletedItem
    })
    console.log(newData)
    setNamaPeserta(newData)
  }

  return (
    <>
      <h1>List Nama Peserta Pegajuan Pinjaman CRUD</h1>
      <table className="namaTabel">
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Nama Pengaju</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            namaPeserta.map((value, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value}</td>
                  <td>
                    <button onClick={handleEdit} value={index}>Edit</button>
                    <button onClick={handleDelete} value={index}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label>Masukan Nilai : </label>
        <input type="text" value={inputNama} onChange={handleChange}></input>
        <button>Simpan Data</button>
      </form>
    </>
  )
}

export default Latihan