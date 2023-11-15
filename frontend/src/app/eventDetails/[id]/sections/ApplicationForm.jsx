'use client'
import { Flex, TextField} from '@radix-ui/themes';

export default function ApplicationForm(){
    return (
        <Flex direction="column" gap="1" style={{ maxWidth: 400 }}>
            <label className='text-sm'>Tukang Ikan</label>
            <TextField.Input
                color="indigo"
                variant="soft"
                placeholder="Search the docs…"
            />
        </Flex>
    )
}