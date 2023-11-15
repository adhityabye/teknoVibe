'use client'
import { Flex, TextField} from '@radix-ui/themes';

const Button = ({title}) => {
    return(
      <button className="bg-purple-900 text-white-100 px-5 py-2.5 text-sm rounded-md z-10 active:scale-95">{title}</button>
    )
}

export default function ApplicationForm(){
    return (
        <div className="flex flex-col items-center justify-start h-screen gap-4">
            <div className="text-center mb-8">
                <h1 className="text-black-900 text-4xl font-semibold">Form Pendaftaran</h1>
            </div>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-4">
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Nama Lengkap</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Nama Lengkap"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>NIM</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input NIM"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Email UGM</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Email UGM"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Program Studi</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Program Studi"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Link CV</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Link CV"
                        />
                    </Flex>
                </div>
                <div className="flex flex-col gap-4">
                <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Angkatan</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Angkatan"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>ID Line</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input ID Line"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Pilihan Divisi</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Pilihan Divisi"
                        />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
                        <label className='text-sm'>Alasan</label>
                        <TextField.Input
                            color="indigo"
                            variant="soft"
                            placeholder="Input Alasan"
                        />
                    </Flex>
                </div>
            </div>
            <div className="text-center">
                <Button title={"Kirim"}/>
            </div>
        </div>
    )
}