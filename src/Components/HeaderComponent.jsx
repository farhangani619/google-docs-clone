import React, { useState } from "react";
import MediaAssets from "../Assets";

const HeaderComponent = () => {
	const [name, setName] = useState("Unitled document");
	const handleOnChange = (event) => {
		if (event.target.length === 0) {
			setName("Unitled document");
		} else {
			setName(event.target.value);
		}
	};
	const handleFocus = (event) => event.target.select();
	return (
		<>
			<header className="header-main-container">
				<div className="header-container">
					<img
						width={"34px"}
						height={"34px"}
						src={MediaAssets.googleDocs}
						alt=""
					/>
					<div style={{ width: "96vw" }}>
						<div className="top-menu-bar-container">
							<div className="file-name-container">
								<input
									className="name-of-file"
									type="text"
									value={name}
									onFocus={handleFocus}
									size={name.length}
									onChange={(e) => handleOnChange(e)}
								/>
								<div className="file-name-icons">
									<img
										width={"20px"}
										height={"20px"}
										src={MediaAssets.star}
										alt=""
									/>
									<img
										width={"20px"}
										height={"20px"}
										src={MediaAssets.moveFolders}
										alt=""
									/>
									<img
										width={"20px"}
										height={"20px"}
										src={MediaAssets.cloudDone}
										alt=""
									/>
								</div>
							</div>
							<div className="profile-container">
								<img
									width={"30px"}
									height={"30px"}
									src={MediaAssets.history}
									alt=""
								/>
								<img
									width={"30px"}
									height={"30px"}
									src={MediaAssets.comments}
									alt=""
								/>
								<div
									className="option-wrapper"
									aria-selected="false"
									title="Meet"
								>
									<img
										width={"30px"}
										height={"30px"}
										src={MediaAssets.videocam}
										alt=""
									/>
									<div className="dropdown-arrow arrow-position"></div>
								</div>
								<div className="share-button">
									<img
										width={"20px"}
										height={"20px"}
										src={MediaAssets.lock}
										alt=""
									/>
									Share
								</div>
								<div>
									<img
										width={"30px"}
										height={"30px"}
										src={MediaAssets.accounts}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="menu-bar-container">
							<div className="menu-bar">
								<p className="options">File</p>
								<p className="options">Edit</p>
								<p className="options">View</p>
								<p className="options">Insert</p>
								<p className="options">Format</p>
								<p className="options">Tools</p>
								<p className="options">Extensions</p>
								<p className="options">Help</p>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeaderComponent;
