import Navbar from "../../../components/Navbar";

export default function ViewParticipant() {
  const labels = [
    'No',
    'Nama Lengkap',
    'NIM',
    'Email UGM',
    'Program Studi',
    'Angkatan',
    'ID Line',
    'Pilihan Divisi',
    'Alasan',
    'File Upload (.pdf)',
  ];

  const participants = [
    [
      '1',
      'Adhitya Bayu',
      '21/479192/TK/52823',
      'adhitya.bay2003@mail.ugm.ac.id',
      'Computer Science',
      '2021',
      'a-dhitt76',
      'Division Acara',
      'Interest in technology',
      'file1.pdf',
    ],
    [
      '2',
      'Daffa Kamal',
      '21/123456/TK/78910',
      'daffa.kamal@mail.ugm.ac.id',
      'Teknologi Informasi',
      '2021',
      'john_doe123',
      'Divisi IT',
      'Passionate about IT and other things related',
      'file2.pdf',
    ],
  ];

  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div className="mx-4 md:mx-10 lg:mx-20 mt-10">
          <h1 className="text-2xl font-bold text-center mb-6 mt-10">Daftar Pendaftar</h1>
          <table className="mx-auto">
            <thead>
              <tr>
                {labels.map((label, index) => (
                  <th key={index} className="py-2 px-4 text-center">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {participants.map((participantData, pIndex) => (
                <tr key={pIndex} className="text-center">
                  {participantData.map((data, dataIndex) => (
                    <td key={dataIndex} className="py-2 px-4">
                      {data}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
