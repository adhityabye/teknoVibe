"use client";
import { Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";

const Button = ({ title }) => {
  return (
    <button
      type="submit"
      className="bg-purple-900 text-white-100 px-5 py-2.5 text-sm rounded-md z-10 active:scale-95"
    >
      {title}
    </button>
  );
};

const Notification = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <div className="flex flex-col shadow-2xl bg-white p-5 px-10 z-10 place-items-center rounded-lg">
        <p className="font-bold text-purple-200 text-2xl mb-4">Notice</p>
        <p className="bg-white p-4 rounded-md">{message}</p>
        <button
          className="mt-10 p-2 px-4 bg-purple-200 text-white rounded-2xl transition-transform duration-300 transform hover:bg-purple-900 hover:scale-110 active:scale-95"
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const WarningNotification = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      <div className="flex flex-col shadow-2xl bg-white p-5 px-10 z-10 place-items-center rounded-lg">
        <p className="font-bold text-yellow-800 text-2xl mb-4">Warning</p>
        <p className="bg-white p-4 rounded-md">{message}</p>
        <button
          className="mt-10 p-2 px-4 bg-yellow-500 text-white rounded-2xl transition-transform duration-300 transform hover:bg-yellow-700 hover:scale-110 active:scale-95"
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default function ApplicationForm({ eventId }) {
  const [applicantInfo, setApplicantInfo] = useState({
    namaLengkap: "",
    nim: "",
    emailUGM: "",
    programStudi: "",
    angkatan: "",
    idLine: "",
    pilihanDivisi: "",
    alasan: "",
    uploadCV: "",
    eventId: eventId,
  });

  const {
    namaLengkap,
    nim,
    emailUGM,
    programStudi,
    angkatan,
    idLine,
    pilihanDivisi,
    alasan,
    uploadCV,
  } = applicantInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setApplicantInfo({ ...applicantInfo, [name]: value });
  };

  const postApplicantInfo = async (data) => {
    try {
      const res = await fetch("https://tekno-vibe-be.vercel.app/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const _data = await res.json();
      console.log(_data);

      // Show notification after successful submission
      setNotificationMessage("Your data has been successfully submitted!");
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
      // Handle error, show error message, etc.
      setWarningMessage("An error occurred. Please try again.");
      setIsWarningOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const allFieldsFilled = Object.values(applicantInfo).every(
      (value) => value !== undefined && value !== null && value !== ""
    );

    if (!allFieldsFilled) {
      // Show a warning or handle the case where not all fields are filled
      setWarningMessage("Please fill in all fields");
      setIsWarningOpen(true);
      return;
    }

    applicantInfo.angkatan = parseInt(applicantInfo.angkatan);

    try {
      await postApplicantInfo(applicantInfo);

      // Reset form fields
      setApplicantInfo({
        namaLengkap: "",
        nim: "",
        emailUGM: "",
        programStudi: "",
        angkatan: "",
        idLine: "",
        pilihanDivisi: "",
        alasan: "",
        uploadCV: "",
        eventId: eventId,
      });

      // Show success notification or perform other actions
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-start h-screen gap-8"
      style={{ width: "80%", margin: "auto" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-black-900 text-4xl font-semibold">
          Form Pendaftaran
        </h1>
      </div>
      <form className="flex flex-col gap-8" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4">
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Nama Lengkap</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Nama Lengkap"
                onChange={(e) => handleChange(e)}
                value={namaLengkap}
                name="namaLengkap"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">NIM</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input NIM"
                onChange={(e) => handleChange(e)}
                value={nim}
                name="nim"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Email UGM</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Email UGM"
                onChange={(e) => handleChange(e)}
                value={emailUGM}
                name="emailUGM"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Program Studi</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Program Studi"
                onChange={(e) => handleChange(e)}
                value={programStudi}
                name="programStudi"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Link CV</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Link CV"
                onChange={(e) => handleChange(e)}
                value={uploadCV}
                name="uploadCV"
              />
            </Flex>
          </div>
          <div className="flex flex-col gap-4">
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Angkatan</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Angkatan"
                onChange={(e) => handleChange(e)}
                value={angkatan}
                name="angkatan"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">ID Line</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input ID Line"
                onChange={(e) => handleChange(e)}
                value={idLine}
                name="idLine"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Pilihan Divisi</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Pilihan Divisi"
                onChange={(e) => handleChange(e)}
                value={pilihanDivisi}
                name="pilihanDivisi"
              />
            </Flex>
            <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
              <label className="text-sm">Alasan</label>
              <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Input Alasan"
                onChange={(e) => handleChange(e)}
                value={alasan}
                name="alasan"
              />
            </Flex>
          </div>
        </div>
        <div className="text-center">
          <Button title={"Kirim"} />
        </div>
        <Notification
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          message={notificationMessage || ""}
        />
        <WarningNotification
          isOpen={isWarningOpen}
          onClose={() => setIsWarningOpen(false)}
          message={warningMessage || ""}
        />
      </form>
    </div>
  );
}
