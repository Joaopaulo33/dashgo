import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export function Sidebar(){
    return (
    <Box as="aside" w="64" mr="8">
        <Stack spacing="12" align= "flex-start">
            <Box>
                <Text fontWeight="bold" color="gray.400" font-size="small">GERAL</Text>
                <Stack  spacing="4" mt="8" >
                    <Link display="flex" alignItems="center">
                        <Icon as={RiDashboardLine} fontSize="28"/>
                        <Text ml="4" fontWeight="mediun">Dashboard</Text>
                    </Link>
                    <Link display="flex" alignItems="center">
                        <Icon as={RiContactsLine} fontSize="28"/>
                        <Text ml="4 " fontWeight="mediun">Usuários</Text>
                    </Link>
                </Stack>
            </Box> 
            <Box>
                <Text fontWeight="bold" color="gray.400" font-size="small">AUTOMAÇÃO</Text>
                <Stack  spacing="4" mt="8" align="stretch">
                    <Link display="flex" alignItems="center">
                        <Icon as={RiInputMethodLine} fontSize="28"/>
                        <Text ml="4" fontWeight="mediun">Formulários</Text>
                    </Link>
                    <Link display="flex" alignItems="center">
                        <Icon as={RiGitMergeLine} fontSize="28"/>
                        <Text ml="4 " fontWeight="mediun">Automação</Text>
                    </Link>
                </Stack>
            </Box> 
        </Stack>
    </Box>    
    )
}