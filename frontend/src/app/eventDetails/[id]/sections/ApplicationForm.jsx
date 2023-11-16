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
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setApplicantInfo({ ...applicantInfo, [name]: value });
  };

  const postApplicantInfo = async (data) => {
    try {
      const res = await fetch("http://localhost:9090/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const _data = await res.json();
      console.log(_data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applicantInfo.angkatan = parseInt(angkatan);
    postApplicantInfo(applicantInfo);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen gap-4">
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
      </form>
    </div>
  );
}
