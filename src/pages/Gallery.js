import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/ImageCart";
import { NavLink } from "react-router-dom";

const PhotoGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div id="galleryContainer">
            <div id="galleryTop">
            <p className="sectionHeader">Gallery</p>

            <Gallery photos={photos} onClick={openLightbox} />

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
            
            </div>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/career">
                        {" "}
                        
                            {" "}
                            Career{" "}
                            <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                            <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
};
export default PhotoGallery;
