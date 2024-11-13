"use client"
import React, { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Toast } from "../components/Toast";
import "../components/styles/toast.css";
import { Modal } from "../components/Modal";


const Page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleClose = () => {
    setShowToast(false);
   };
  const breadcrumbItems = [
    { label: "Home" },
    { label: "Products" },
    { label: "Details" }
  ];

  return (
    <div>
      <div>
        <h1>Breadcrumb dengan Separator "/"</h1>
        <Breadcrumb items={breadcrumbItems} separator="/" />
      </div>
      <br />
      <div>
        <h1>Breadcrumb dengan Separator "&gt"</h1>
        <Breadcrumb items={breadcrumbItems} separator=">" />
      </div>
      <br />
      <div>
        {showToast && (
          <Toast
            message1="This is the title"
            message2="This is the message content."
            duration={3000}
            onClose={handleClose}
          />
        )}
        <button onClick={() => setShowToast(true)}>Show Toast</button>
      </div>
       <div>
      <button onClick={openModal}>Open Modal</button>
      
      <Modal 
        isOpen={isModalOpen} 
        title="Modal Title" 
        onClose={closeModal}
      >
        <p>This is the content inside the modal.</p>
      </Modal>
    </div>
    </div>
  );
};

export default Page;
