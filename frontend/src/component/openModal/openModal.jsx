import React from "react";

const OpenModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <span onClick={onClose} style={styles.close}>&times;</span>
                <h2>{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        position: "relative",
        width: "300px",
        textAlign: "center",
    },
    close: {
        position: "absolute",
        top: "10px",
        right: "15px",
        fontSize: "24px",
        cursor: "pointer",
    }
};

export default OpenModal;
