import React from 'react';
import { ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";


const SocialLinks = () => {
  return (
    <div>
        <p className="m-0 mt-5 ms-2">Find Us On</p>
        <ListGroup>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <FaFacebook />
            <p className="m-0 ms-2">Facebook</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <FaYoutube />
            <p className="m-0 ms-2">Youtube</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <FaWhatsapp />
            <p className="m-0 ms-2">Whatsapp</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <FaTwitter />
            <p className="m-0 ms-2">Twitter</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <FaDiscord />
            <p className="m-0 ms-2">Discord</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <MdPrivacyTip />
            <p className="m-0 ms-2">Privacy Policy</p>
          </ListGroup.Item>
          <ListGroup.Item className="my-1 shadow rounded d-flex align-items-center">
            <TiBusinessCard />
            <p className="m-0 ms-2">Terms and Conditions</p>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );
};

export default SocialLinks;
