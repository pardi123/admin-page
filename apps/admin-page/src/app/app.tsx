import { ChakraProvider } from '@chakra-ui/react';
import { AdminPageMain } from '@admin-page/admin-page/main';
import { Route, Routes } from 'react-router';
export function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/*" element={<AdminPageMain />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
