"use client";
import { registerKeyword } from "@/app/api/keyword/registerKeyword";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";

// create interface
interface RegisterKeywordModalProps {
  isOpen: boolean;
  onOpenClose: () => void;
}

// create function of modal content
function RegisterKeywordModal({
  isOpen,
  onOpenClose,
}: RegisterKeywordModalProps) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async () => {
    if (keyword !== "") {
      await registerKeyword({ keyword });
      alert("Registered.");
      onOpenClose();
    } else {
      alert("Put the keyword");
    }
  };

  return (
    <Modal size="xs" isOpen={isOpen} onOpenChange={onOpenClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Register Keyword</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                placeholder="Put the Keyword"
                variant="bordered"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={handleSubmit}>
                Register
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RegisterKeywordModal;
