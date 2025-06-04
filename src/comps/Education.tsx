export function EducationTab() {
    return(
        <>
            <h2>Thesis</h2>
            <h3>Memory Access Characterization of Large Language Models in CPU Environment and Its Potential Impacts</h3>
            <p>My thesis investigates the memory behavior of the QWEN decoder within the llama.cpp framework, with a focus 
                on low-level architectural implications. I leveraged the ChampSim simulator to evaluate the performance of 
                various hardware prefetching and cache replacement strategies. Through detailed analysis using GDB and 
                disassembly inspection, alongside data processing with Python scripts, I was correlated frequently used memory 
                addresses with high-level variables to understand the program behavior.</p>
            <p>I found that the majority of memory accesses originate from the model's vocabulary handling. The working 
                set of the decorder is large and has minimal temporal locality, limiting the effectiveness of conventional 
                cache replacement policies. Finally, access patterns do repeat, but over the spans of millions of cycles, making it 
                difficult for a prefetcher to perfectly predict these patterns.
            </p>
            <h2>Graduate Coursework</h2>
            <h3>Computer Architecture</h3>
            <p>I explored modern computer architecture, focusing on parallel and high-performance computing techniques with processors and memory.
                I studied the RISC-V instruction set and pipeline design, analyzing various performance bottlenecks such as data, structural, and control hazards.
                I had hands-on labs using ZSim, allowing me to experiment with the performances of different branch prediction strategies. 
                Additional strategies for instruction-level parallelism included loop unrolling, dynamic scheduling, Tomasulo's algorithm, and 
                hardware speculation for multiple-issue processors.</p>
            <p>The second half of the course focused on memory hierarchy with a focus on caches, including replacement and write policies, TLBs, prefetching, 
                and cache coherence. Additional topics, such as SIMD and vector architectures, highlighted the complexities of parallel execution and memory consistency
                in multiprocessor systems.</p>
            <h3>Networking</h3>
                <p>I built several programs in C++ using the Windows.h and Winsock API. Among the projects was a 
                    multithreaded web crawler, which could visit and record information about multiple websites concurrently.</p>
                <p>Another project was a custom DNS client, which used a UDP socket to send DNS query packets to a DNS server, then parse 
                    their responses to get IP addresses or other information. The client had to be capable of parsing compressed responses,
                    which involved readying the bytes to determine whether the compression flag was being used, and where to jump to.</p>
                <p>I also built a traceroute utility which sent UDP packets with different TLL values using the ICMP. These were done in parallel,
                    sending out 30 packets at a time and then moving to the recieving logic. The utility dynamically determined the timeout period.</p>
                <p>Finally, I had implemented TCP over a UDP socket, simulating reliable behavior. This featured connection establishment, sequence numbers,
                    acknowledgements, retransmission, and window control. Finally, the program was enhanced to facilitate pipelining.</p>
                <p>Course material was primarily focused over the transport and network layers, with some study over the data link layer. I 
                    studied TCP and UDP in detail, along with IP addressing and ICMP, and finally MAC addressing and ARP.</p>
            <h3>Algorithm Analysis</h3>
                <p>I studied the design and analysis of algorithms with a focus on theoretical foundatiosn and pratcial techniques. 
                    I learned to analyze algorithm efficiency using asymptotic notation and lower-bound techniques such as the decision tree 
                    and adversarial methods. The course covered a wide breadth of algorithmic paradigms including divide and conquer, 
                    dynamic programming, greedy algorithms, graph algorithms, and randomized algorithms. The last portion of the course focused on 
                    computational complexity, including NP-completeness, the polynomial hierarchy, and the limits of computabilit through problems 
                    like the SAT.</p>
            <h3>Operating Systems</h3>
                <p>I completed a series of hands-on labs using a simulated OS environment powered by QEMU. All programming was done in C.
                    The labs progressively built on core OS concenpts and required modifiying the kernel itself.</p>
                <p>One of the early labs involved adding custom system calls and working with interrupts, providing insight on how user space and 
                    kernel space interacted with one another. We then implemented lazy allocation in page tables, where memory pages were 
                    only allocated once accessed, covering demand paging and page fault handling. Next I implemented copy-on-write forking, which 
                    only allocates and copies a fork's memory pages when the parent or child process writes to memory.</p>
                <p>In The later labs I implemented threading, which needed to handle context switching, scheduling, and synchronization.
                    In addition I added large files and symbolic links, with the last lab focused on implementing a simple Virtual Machine Monitor, 
                    allowing guest processes to run in an isolated environment. The main challenge was passing from guest space, to user space, and finally 
                    to kernel space.</p>
            <h3>Distributed Processing</h3>
                <p>I developed a social media platform using gRPC with a server-client architecture. The system made use of a load balancer which distrubted users
                    across 3 clusters. Each of the main servers had a backup server which would mirror the state of the primary server in a cluster. 
                    If the primary server went down, the backup server would recieve the clients from the load balancer. State between the clusters was 
                    managed by a series of file syncrhonizers, which used RabbitMQ to transfer messages among one another.</p>
            <h3>Compiler Design</h3>
                <p>I designed and implemented a compiler in Java for a custom, LL(1) programming language. 
                The language was designed for the class. The compiler follows a traditional multi-stage pipeline: 
                it parses the source code into an abstract syntaxt tree, generates an intermediate representation, 
                applies multiple optimization passes, and creates low-level machine code for a fictional instruction set architecture (ISA).</p>
                <p>Three Main Components:</p>
                <ul>
                    <li>Intermediate Representation: Designed a custom IR to decouple the front-end language to the back-end code generation</li>
                    <li>Optimizations:</li>
                    <ul>
                        <li>Constant Folding - Simplifies constant expressions into one number.</li>
                        <li>Constant propagation - Replaces constant variables with their literal constant.</li>
                        <li>Common Subexpression Elimination - Converts frequently appearing expressions into a variable which is then used instead.</li>
                        <li>Dead Code Elimination - Unreachable if statements or code after return statements are removed.</li>
                        <li>Register Allocation - IR variables are efficiently mapped to registers so that the same registers can be reused in assignment expressions.</li>
                    </ul>
                    <li>Code Generation: Optimized IR was turned into machine code for a fictional ISA.</li>
                </ul>
            <h3>Software Engineering</h3>
                <p>I collaborated with three classmates to continue work on an online store for selling a math 
                    textbook. The fullstack development used React as the front end, Node.js for the backend, and Jest for 
                    the testing. We worked together to understand the existing codebase, implement new features, fix bugs, and ensure 
                    code quality through unit and integration tests. The product manager was satisfied with our work. I specifically 
                    focused on managing the repository and assisting others merge their commits, along with deploying the 
                    development branch product to a Heroku server. </p>
            <h3>Deep Learning & Machine Learning</h3>
            <p>I used python a gread deal in these classes, leveraging libraries such as NumPy, Pandas, PyTorch, and TensorFlow.
                The labs were done in a combination of Jupyter Notebook and normal Python scripts, giving me practical experience with 
                training and building my own models.
            </p>
            <p>In deep learning I studied associtive memory models, competitive learning, adaptive resonance theory, and the convergence properties 
                of various neural architectures. A key part of the course was designing and training multilayer neural networks, including 
                convolutional neural networks and recurrent neural networks, for tasks in vision and speech recognition. Machine learning focused on a broader spectrum of AI, including topics such as linear regression, logistic regression, and 
                decision trees. These courses gave me a strong foundation in both the theoretical principles of learning systems and their 
                practical implementation.
            </p>
        </>
    )
}