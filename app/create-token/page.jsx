"use client";
import { CreateTokenModal } from "../../components/ui/modals/createtoken";
import { useState } from "react";

export default function CreateTokenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CreateTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
