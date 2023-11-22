import Navbar from '../components/Navbar';

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

  const renderParticipantData = (participantData, index) => {
    return (
      <div key={index} className="flex flex-wrap justify-start mb-4">
        {participantData.map((data, dataIndex) => (
          <div key={dataIndex} className="flex-grow flex flex-col justify-start items-start mr-8 mb-2">
            <p>{data}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <main className="flex justify-center">
        <div>
          <h1 className="text-2xl font-bold text-center mt-20 mb-10">Daftar Pendaftar</h1>
          
          <div className="flex flex-wrap justify-start mb-2">
            {labels.map((label, index) => (
              <div key={index} className="flex-grow flex flex-col justify-center items-start mr-8">
                <p className="font-bold">{label}</p>
              </div>
            ))}
          </div>
          
          {participants.map((participantData, pIndex) => (
            <div key={pIndex} className="flex flex-wrap justify-start mb-4">
              {renderParticipantData(participantData, pIndex)}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}