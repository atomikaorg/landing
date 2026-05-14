import Header from "@/components/Certificate/Header"
import NationalCert from "@/components/Certificate/NationalCert"
import Teacher1 from "@/components/Certificate/Teacher"
import FAQ from "@/components/V2/FAQ"
import Footer from "@/components/V2/Footer"
import Modal from "@/components/V2/Modal"
import Ready from "@/components/V2/Ready"
import StudentsResult from "@/components/V2/StudentsResult"
import { useCallback, useRef, useState } from "react"

const certificateGradient = "bg-[linear-gradient(111.38deg,_#1A1205_0%,_#2D1F08_50%,_#1A1408_100%)]"

export const NationalCertificate =()=>{
      const [modalSource, setModalSource] = useState<string | undefined>();
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalOpenMode, setModalOpenMode] = useState<'button' | 'scroll'>('button');
      const [autoOpenedSections, setAutoOpenedSections] = useState<Record<string, boolean>>({});
      const modalOpenFrameRef = useRef<number | null>(null);
      const modalOpenTimeoutRef = useRef<number | null>(null);
    
      const clearPendingModalOpen = useCallback(() => {
        if (modalOpenFrameRef.current) {
          window.cancelAnimationFrame(modalOpenFrameRef.current);
          modalOpenFrameRef.current = null;
        }
    
        if (modalOpenTimeoutRef.current) {
          window.clearTimeout(modalOpenTimeoutRef.current);
          modalOpenTimeoutRef.current = null;
        }
      }, []);
    
      const scheduleModalOpen = useCallback((source: string, mode: 'button' | 'scroll') => {
        setModalSource(source);
        setModalOpenMode(mode);
    
        clearPendingModalOpen();
    
        window.requestAnimationFrame(() => {
          modalOpenFrameRef.current = window.requestAnimationFrame(() => {
            setIsModalOpen(true);
            modalOpenFrameRef.current = null;
          });
        });
      }, [clearPendingModalOpen]);
    
      const openModal = useCallback((source: string) => {
        scheduleModalOpen(source, 'button');
      }, [scheduleModalOpen]);
    
      const closeModal = useCallback(() => {
        clearPendingModalOpen();
        setIsModalOpen(false);
      }, [clearPendingModalOpen]);
    
      const openModalOnce = useCallback((source: string) => {
        setAutoOpenedSections((previous) => {
          if (previous[source]) {
            return previous;
          }
    
          clearPendingModalOpen();
          modalOpenTimeoutRef.current = window.setTimeout(() => {
            scheduleModalOpen(source, 'scroll');
            modalOpenTimeoutRef.current = null;
          }, 2000);
    
          return {
            ...previous,
            [source]: true,
          };
        });
      }, [clearPendingModalOpen, scheduleModalOpen]);
    
    return (
    <div>
        <Header onOpenModal={()=>openModal("header-cta")} />
        <div className="pt-[100px]">
        <NationalCert onOpenModal={()=>openModal("national-cert-cta")} />
        <StudentsResult iscert={true} />
        <Teacher1/>
        <Ready onOpenModal={() => openModal('ready-button')} bgClassName={certificateGradient} />
        <FAQ  iscert={true}/>
        </div>
        <Modal
             isOpen={isModalOpen}
              onClose={closeModal}
              source={modalSource}
              openMode={modalOpenMode}
              bgClassName={certificateGradient}
        />
        <Footer bgClassName={certificateGradient} />
    </div>
)}
