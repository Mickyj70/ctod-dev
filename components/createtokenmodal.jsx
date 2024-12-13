import { useState } from "react";
import { CreateTokenModal } from "@/components/ui/modals/createtoken";

export default function CreateTokenModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Create Token</button>

      <CreateTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
