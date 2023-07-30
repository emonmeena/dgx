import React, { useState } from "react";
import { RingLoader } from "react-spinners";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

const FastQInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onOpen();
    }, 2000);
  };

  const content = `##INFO=<ID=INDEL,Number=0,Type=Flag,Description="Indicates that the variant is an INDEL.">
  ##INFO=<ID=IDV,Number=1,Type=Integer,Description="Maximum number of reads supporting an indel">
  ##INFO=<ID=IMF,Number=1,Type=Float,Description="Maximum fraction of reads supporting an indel">
  ##INFO=<ID=DP,Number=1,Type=Integer,Description="Raw read depth">
  ##INFO=<ID=VDB,Number=1,Type=Float,Description="Variant Distance Bias for filtering splice-site artefacts in RNA-seq data (bigger is better)",Version=
  ##INFO=<ID=RPB,Number=1,Type=Float,Description="Mann-Whitney U test of Read Position Bias (bigger is better)">
  ##INFO=<ID=MQB,Number=1,Type=Float,Description="Mann-Whitney U test of Mapping Quality Bias (bigger is better)">
  ##INFO=<ID=BQB,Number=1,Type=Float,Description="Mann-Whitney U test of Base Quality Bias (bigger is better)">
  ##INFO=<ID=MQSB,Number=1,Type=Float,Description="Mann-Whitney U test of Mapping Quality vs Strand Bias (bigger is better)">
  ##INFO=<ID=SGB,Number=1,Type=Float,Description="Segregation based metric.">
  ##INFO=<ID=MQ0F,Number=1,Type=Float,Description="Fraction of MQ0 reads (smaller is better)">
  ##FORMAT=<ID=PL,Number=G,Type=Integer,Description="List of Phred-scaled genotype likelihoods">
  ##FORMAT=<ID=GT,Number=1,Type=String,Description="Genotype">
  ##INFO=<ID=ICB,Number=1,Type=Float,Description="Inbreeding Coefficient Binomial test (bigger is better)">
  ##INFO=<ID=HOB,Number=1,Type=Float,Description="Bias in the number of HOMs number (smaller is better)">
  ##INFO=<ID=AC,Number=A,Type=Integer,Description="Allele count in genotypes for each ALT allele, in the same order as listed">
  ##INFO=<ID=AN,Number=1,Type=Integer,Description="Total number of alleles in called genotypes">
  ##INFO=<ID=DP4,Number=4,Type=Integer,Description="Number of high-quality ref-forward , ref-reverse, alt-forward and alt-reverse bases">
  ##INFO=<ID=MQ,Number=1,Type=Integer,Description="Average mapping quality">
  ##bcftools_callVersion=1.8+htslib-1.8
  ##bcftools_callCommand=call --ploidy 1 -m -v -o results/bcf/SRR2584866_variants.vcf results/bcf/SRR2584866_raw.bcf; Date=Tue Oct  9 18:48:10 2018`;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sampleData = {
    variant_id: "rs7903146",
    gene: "TCF7L2",
    variant_type: "SNP",
    known_effects:
      "This variant is associated with an increased risk of Type 2 Diabetes. People who have one copy of the T allele have an increased risk, and those with two copies of the T allele are at even higher risk.",
    population_frequency:
      "Approximately 30% of people have at least one copy of the risk allele (T). The frequency varies among different populations.",
    interpretation:
      "The presence of the T allele at this location is associated with increased risk of Type 2 Diabetes. However, lifestyle factors such as diet, physical activity, and weight can also strongly influence the risk of Type 2 Diabetes. People with this variant should discuss their genetic data with a healthcare professional.",
  };

  return (
    <div
      className="flex flex-col font-sans text-2xl justify-center items-center mt-20 
      bg-sky-800 shadow-2xl  drop-shadow-2xl rounded-lg max-w-lg mx-auto p-6 h"
    >
      <h1 className="text-3xl font-bold mt-20 mb-10 text-black">
        Enter a FastQ file
      </h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="block w-full outline-none out bg-blue-400 
          text-gray-700 backdrop-blur-2xl backdrop-brightness-90 rounded-full 
          py-3 px-4 mb-3 leading-tight focus:outline-none 
          focus:border-blue-500 shadow-sm transition duration-500"
          type="file"
          accept=".fastq"
          style={{
            boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)",
            transition: "all .3s ease",
          }}
        />
        <div className="flex justify-around">
          <button
            className="
          mt-10 mb-20 
          bg-blue-500 
          text-white 
          font-bold 
          py-2 px-4 
          rounded-full 
          hover:bg-blue-700 
          transition-colors duration-300"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>

          <button
            className="
          mt-10 mb-20 
          bg-blue-500 
          text-white 
          font-bold 
          py-2 px-4 
          rounded-full 
          hover:bg-blue-700 
          transition-colors duration-300"
          >
            {isLoading ? "Loading..." : "Fetch from Database"}
          </button>
        </div>
      </form>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="text-center">Result for your query</div>
              </ModalHeader>
              <Divider orientation="horizontal" />
              <Divider orientation="horizontal" />
              <Divider orientation="horizontal" />
              <ModalBody className="flex flex-col px-20">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Variant ID:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.variant_id}
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Gene:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.gene}
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Variant Type:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.variant_type}
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Known Effects:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.known_effects}
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Population Frequency:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.population_frequency}
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    Interpretation:
                  </div>
                  <div className="text-center font-roboto  rounded-full justify-center items-center flex">
                    {sampleData.interpretation}
                  </div>
                </div>
                <Divider className="bg-black" orientation="horizontal" />
                <div>
                  {content.split("\n").map((line, idx) => {
                    return (
                      <div className="px-4">
                        <div key={idx}>
                          {line}
                          <br />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {isLoading && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex items-center justify-center"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <RingLoader color={"blue"} size={150} />
        </div>
      )}
    </div>
  );
};

export default FastQInput;
