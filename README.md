<h1 align="center">
  TeknoVibe
</h1>

<p align="center">Web App yang mengintegrasikan informasi event di lingkungan Fakultas Teknik UGM</p><br>

### 🫂Anggota Kelompok
| Nama                     | NIM                |
| ------------------------ | ------------------ |
| [Adhitya Bayu pangestu](https://www.github.com/adhityabye) | 21/479192/TK/52823 |
| [Daffa Kamal](https://github.com/daffakamal)              | 21/477293/TK/52564 |
| [Khairun Nisa' Zuqri](https://github.com/KhairunNisaZ)         | 21/473354/TK/52162 |
| [Leonard Mars Kurniaputra](https://github.com/leleonnn)      | 21/482745/TK/53360 |
| [Pranawa Dinanta Adhyarta Putra](https://github.com/Nantapranawa)   | 21/482959/TK/53395 |

### 🖇️Link
- **Frontend:** https://tekno-vibe-fe.vercel.app/
- **Backend:** https://tekno-vibe-be.vercel.app/
- **Video Presentasi:** https://bit.ly/RecordingTeknoVibe
- **PPT Final Project:** https://bit.ly/PPT-Final-Project-Kelompok-5
- **PPT Backend:** https://bit.ly/PPTBackend
- **Video Presentasi Backend:** https://bit.ly/PresentasiTeknoVibeAPI

### 🌐API Endpoints

1.  Daftar akun <br>
    Pengguna dapat mendaftarkan akun baru. <br>
    Endpoint: <br>
    ````````````
    POST /user/register
    ````````````
2.  Masuk Akun <br>
    Pengguna dapat masuk ke dalam akun yang sebelumnya telah dibuat. <br>
    Endpoint: <br>
    ````````````
    POST /user/login
    ````````````
3.  Menghapus Akun <br>
    Pengguna dapat menghapus akun yang sebelumnya dibuat. <br>
    Endpoint: <br>
    ````````````
    DELETE /user/users/:id
    ````````````
4.  Update Akun <br>
    Pengguna dapat memperbarui data diri dari akunnya. <br>
    Endpoint: <br>
    ````````````
    PUT /user/users/:id
    ````````````
5.  Menambahkan Event <br>
    Pengguna dapat mengajukan atau membuat event. <br>
    Endpoint: <br>
    ````````````
    POST /event/add
    ````````````
6.  Mendaftar Event <br>
    Pengguna mendaftar pada event tertentu. <br>
    Endpoint: <br>
    ````````````
    POST /api/staff
    ````````````
7.  Mencari Event <br>
    Pengguna dapat mencari nama event tertentu. <br>
    Endpoint: <br>
    ````````````
    GET /search
    ````````````
8.  Menghapus Event <br>
    Pembuat event dapat menghapus event. <br>
    Endpoint: <br>
    ````````````
    DELETE /delete/:eventId
    ````````````
9.  Edit Data Event <br>
    Pembuat event dapat mengubah informasi event. <br>
    Endpoint: <br>
    ````````````
    PATCH /edit/:editId
    ````````````
10. Melihat Pendaftar <br>
    Pembuat event dapat melihat informasi pendaftar event. <br>
    Endpoint: <br>
    ````````````
    GET /event/:eventId/participants
    ````````````
11. Upload Gambar <br>
    Pengguna dapat mengupload gambar untuk eventnya. <br>
    Endpoint: <br>
    ````````````
    PUT /event/:eventId/uploadImage
    ````````````
12. Mengambil Gambar <br>
    Pengguna dapat mengambil gambar berdasarkan id event. <br>
    Endpoint: <br>
    ````````````
    GET /event/:eventId/getImage
    ````````````

### ⚙️Tech Stack
- Next.js
- Express.js
- Tailwind CSS
- MongoDB
- Node.js


<h2 align="left">🌃Getting Started</h2>
<p>This is a step-by-step guide to run our project built with Express, Node.js, MongoDB on the backend and React.js on the frontend.</p>
<h3>Step 1: Clone the Project</h3>
<p>Start by cloning the project from our GitHub repository to your computer with the following command:</p>

```bash 
git clone https://github.com/adhityabye/teknoVibe.git
```
<h3>Step 2: Install Dependencies</h3>
<p>We have two folders in our project, "backend" for the server-side and "frontend" for the client-side. You need to install dependencies for both separately.</p>

- ### Backend
  - Open a terminal, navigate to the "backend" directory using the cd backend command.
  - Run the following command to install all the required dependencies:
     ```bash 
    npm install
    ```

- ### Frontend
  - Open a terminal, navigate to the "frontend" directory using the cd frontend command.
  - Run the following command to install all the required dependencies:
     ```bash 
    npm install
    ```
    
<h3>Step 3: Running the Project</h3>
<p>Ensure you run both the backend and frontend sides in separate terminal windows.</p>

- ### Backend
  From within the "backend" directory, start the backend server with the following command:

  ```bash 
  npm start
  ```

- ### Frontend
  From within the "frontend" directory, start the frontend application with the following command:
  
  ```bash 
  npm start
  ```
