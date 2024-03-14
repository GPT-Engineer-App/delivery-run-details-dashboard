import React, { useState } from "react";
import { Box, Button, Heading, Select, Text, Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";

const Index = () => {
  // State variables
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSKU, setSelectedSKU] = useState("");

  // Sample data (replace with data from database)
  const schools = ["School 1", "School 2", "School 3", "School 4", "School 5"];
  const skus = ["Rice", "Bread", "Potatoes", "Soup", "Tea"];
  const exceptions = [{ sku: "Bread", from: "2024-05-02", to: "2024-05-04" }];

  return (
    <Box>
      <Heading borderWidth={1} p={4}>
        Report: Delivery Run Details
      </Heading>

      <Box display="flex">
        <Box w="33%" h="50vh" borderWidth={1} p={4} position="sticky" top={0} left={0}>
          <Text fontWeight="bold">Dashboard</Text>
          <Select placeholder="Select school" mb={4}>
            {/* Populate options from database */}
            <option value="school1">School 1</option>
            <option value="school2">School 2</option>
          </Select>
          <Select placeholder="Select SKU">
            {/* Populate options from database */}
            <option value="sku1">SKU 1</option>
            <option value="sku2">SKU 2</option>
          </Select>
        </Box>

        <Box flex={1} p={4}>
          <Box display="flex" alignItems="center" mb={4}>
            <Select placeholder="Select school" value={selectedSchool} onChange={(e) => setSelectedSchool(e.target.value)} mr={4}>
              {schools.map((school) => (
                <option key={school} value={school}>
                  {school}
                </option>
              ))}
            </Select>
            <Button
              mr={2}
              isDisabled={selectedSchool === schools[0]}
              onClick={() => {
                const currentIndex = schools.indexOf(selectedSchool);
                setSelectedSchool(schools[currentIndex - 1]);
              }}
            >
              Previous
            </Button>
            <Button
              isDisabled={selectedSchool === schools[schools.length - 1]}
              onClick={() => {
                const currentIndex = schools.indexOf(selectedSchool);
                setSelectedSchool(schools[currentIndex + 1]);
              }}
            >
              Next
            </Button>
          </Box>

          {selectedSchool ? (
            <>
              <Text fontWeight="bold">Exception Period Menu</Text>
              <Text>Bread (2024-05-02 to 2024-05-04)</Text>

              <Text fontWeight="bold" mt={4}>
                Actual Menu
              </Text>
              <Text>Rice (2024-04-28 to 2024-05-02)</Text>

              <Table mt={4}>
                <Thead>
                  <Tr>
                    <Th>View</Th>
                    <Th>SKU</Th>
                    <Th>From</Th>
                    <Th>To</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {exceptions.map((exception, index) => (
                    <Tr key={index}>
                      <Td>
                        <Link href="/exceptions">View</Link>
                      </Td>
                      <Td>{exception.sku}</Td>
                      <Td>{exception.from}</Td>
                      <Td>{exception.to}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Box display="flex" alignItems="center" mt={4}>
                <Select placeholder="Select SKUs" value={selectedSKU} onChange={(e) => setSelectedSKU(e.target.value)} mr={4}>
                  {skus.map((sku) => (
                    <option key={sku} value={sku}>
                      {sku}
                    </option>
                  ))}
                </Select>
                <Button
                  mr={2}
                  isDisabled={selectedSKU === skus[0]}
                  onClick={() => {
                    const currentIndex = skus.indexOf(selectedSKU);
                    setSelectedSKU(skus[currentIndex - 1]);
                  }}
                >
                  Previous
                </Button>
                <Button
                  isDisabled={selectedSKU === skus[skus.length - 1]}
                  onClick={() => {
                    const currentIndex = skus.indexOf(selectedSKU);
                    setSelectedSKU(skus[currentIndex + 1]);
                  }}
                >
                  Next
                </Button>
              </Box>
            </>
          ) : (
            <Text>Select a school for this delivery run to view its details</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
