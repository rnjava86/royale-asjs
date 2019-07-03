////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
/***
 * Based on the
 * Swiz Framework library by Chris Scott, Ben Clinkinbeard, Sönke Rohde, John Yanarella, Ryan Campbell, and others https://github.com/swiz/swiz-framework
 */
package org.apache.royale.crux.processors
{
	import org.apache.royale.crux.Bean;
	import org.apache.royale.crux.metadata.PreDestroyMetadataTag;
	import org.apache.royale.crux.reflection.IMetadataTag;
	
	/**
	 * PreDestroy Processor
	 */
	public class PreDestroyProcessor extends BaseMetadataProcessor
	{
		// ========================================
		// protected static constants
		// ========================================
		
		protected static const PRE_DESTROY:String = "PreDestroy";
		
		// ========================================
		// public properties
		// ========================================
		
		/**
		 *
		 */
		override public function get priority():int
		{
			return ProcessorPriority.PRE_DESTROY;
		}
		
		// ========================================
		// constructor
		// ========================================
		
		/**
		 * Constructor
		 */
		public function PreDestroyProcessor(metadataNames:Array = null )
		{
			super( ( metadataNames == null ) ? [ PRE_DESTROY ] : metadataNames, PreDestroyMetadataTag );
		}
		
		// ========================================
		// public methods
		// ========================================
		
		/**
		 * @inheritDoc
		 */
		override public function tearDownMetadataTags( metadataTags:Array, bean:Bean ):void
		{
			super.tearDownMetadataTags( metadataTags, bean );
			
			metadataTags.sortOn( "order", Array.NUMERIC );
			
			for each( var metadataTag:IMetadataTag in metadataTags )
			{
				var f:Function = bean.source[ metadataTag.host.name ];
				f.apply(bean.source);
			}
		}
	}
}
