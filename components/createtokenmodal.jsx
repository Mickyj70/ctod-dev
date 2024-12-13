import { CreateTokenModal } from "@/components/ui/modals/createtoken";

// Add state for modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);

// Add button to trigger modal
<>
  // Add button to trigger modal
  <button onClick={() => setIsModalOpen(true)}>Create Token</button>
  // Add modal component
  <CreateTokenModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
  />
</>;
