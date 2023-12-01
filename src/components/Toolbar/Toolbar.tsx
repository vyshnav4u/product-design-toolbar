import React from 'react';
import { EToolbarView } from '../../utils/toolbar.types';
import ToolbarSection from './ToolbarSection';
import ToolbarSeparator from './ToolbarSeparator';
import ToolbarItem from './ToolbarItem';

const Toolbar = () => {
	return (
		<div className="toolBar bg-secondaryBg p-12 border w-100 ">
			<div className="toolbarElements bg-primaryBg rounded-lg p-8 shadow-md flex flex-row gap-4">
				<ToolbarSection
					direction="row"
					view={EToolbarView.FULL_VIEW}
					sectionTitle="Paste"
				>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						hideTitle
					/>
					<ToolbarItem iconName="Paste" direction="col" title="Clipboard" />
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						subtitle="Copy"
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						showExpandIcon
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						subtitle="View"
						showExpandIcon
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						hideTitle
						title="Clipboard"
						showExpandIcon
					/>
					<ToolbarSection direction="col" view={EToolbarView.FULL_VIEW}>
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
					</ToolbarSection>
				</ToolbarSection>
				<ToolbarSection direction="row" view={EToolbarView.FULL_VIEW}>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						hideTitle
					/>
					<ToolbarItem iconName="Paste" direction="col" title="Clipboard" />
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						subtitle="Copy"
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						showExpandIcon
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						title="Clipboard"
						subtitle="View"
						showExpandIcon
					/>
					<ToolbarItem
						iconName="Paste"
						direction="col"
						hideTitle
						title="Clipboard"
						showExpandIcon
					/>
					<ToolbarSection
						direction="row"
						view={EToolbarView.FULL_VIEW}
						sectionTitle="Paste"
					>
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
						<ToolbarItem iconName="Paste" direction="row" title="Cell Style" />
					</ToolbarSection>
				</ToolbarSection>
				<ToolbarSeparator />
				<ToolbarSection
					direction="row"
					view={EToolbarView.FULL_VIEW}
					sectionTitle="Hello"
				>
					<ToolbarItem iconName="Paste" direction="col" title="Clipboard" />
				</ToolbarSection>
				<ToolbarSeparator />
			</div>
		</div>
	);
};

export default Toolbar;
